import { Button } from "../components/ui/Button";
import { useEffect, useState } from "react";
import { api } from "../lib/api";
import type { UpdateProfileInput, AddressInput, UpdateAddressInput } from "../lib/api";
import { toast, Toaster } from "sonner";

export default function Account() {
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [profile, setProfile] = useState<any>(null);
  const [addresses, setAddresses] = useState<any[]>([]);
  const [editingAddress, setEditingAddress] = useState<string | null>(null);
  const [showAddAddress, setShowAddAddress] = useState(false);

  // Fetch profile data
  useEffect(() => {
    loadProfileData();
  }, []);

  const loadProfileData = async () => {
    try {
      const data = await api.customerProfile();
      setProfile(data.customerProfile);
      setAddresses(data.customerProfile.addresses || []);
      setLoading(false);
    } catch (error) {
      toast.error("Failed to load profile data");
      setLoading(false);
    }
  };

  const handleProfileUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setUpdating(true);
    
    const formData = new FormData(e.target as HTMLFormElement);
    const updates: UpdateProfileInput = {
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
    };

    try {
      const result = await api.updateProfile({ input: updates });
      setProfile(result.updateProfile);
      toast.success("Profile updated successfully");
    } catch (error) {
      toast.error("Failed to update profile");
    } finally {
      setUpdating(false);
    }
  };

  const handleAddAddress = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const addressData: AddressInput = {
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      streetAddress1: formData.get('street1') as string,
      streetAddress2: formData.get('street2') as string || undefined,
      city: formData.get('city') as string,
      state: formData.get('state') as string,
      postalCode: formData.get('postalCode') as string,
      country: formData.get('country') as string,
      phone: formData.get('phone') as string,
      isDefault: formData.get('isDefault') === 'true',
    };

    try {
      const result = await api.addAddress({ input: addressData });
      setAddresses([...addresses, result.addAddress]);
      setShowAddAddress(false);
      toast.success("Address added successfully");
    } catch (error) {
      toast.error("Failed to add address");
    }
  };

  const handleUpdateAddress = async (id: string, data: UpdateAddressInput) => {
    try {
      const result = await api.updateAddress({ input: { ...data, id } });
      setAddresses(addresses.map(addr => addr.id === id ? result.updateAddress : addr));
      setEditingAddress(null);
      toast.success("Address updated successfully");
    } catch (error) {
      toast.error("Failed to update address");
    }
  };

  const handleDeleteAddress = async (id: string) => {
    try {
      await api.deleteAddress({ id });
      setAddresses(addresses.filter(addr => addr.id !== id));
      toast.success("Address deleted successfully");
    } catch (error) {
      toast.error("Failed to delete address");
    }
  };

  if (loading) {
    return <div className="flex justify-center items-center h-96">Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Toaster position="top-right" />
      <h1 className="text-3xl font-bold mb-8">My Account</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="md:col-span-2 space-y-6">
        <form onSubmit={handleProfileUpdate} className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">First Name</label>
                <input
                  name="firstName"
                  type="text"
                  className="w-full p-2 border rounded"
                  defaultValue={profile?.firstName}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Last Name</label>
                <input
                  name="lastName"
                  type="text"
                  className="w-full p-2 border rounded"
                  defaultValue={profile?.lastName}
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                name="email"
                type="email"
                className="w-full p-2 border rounded"
                defaultValue={profile?.email}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Phone</label>
              <input
                name="phone"
                type="tel"
                className="w-full p-2 border rounded"
                defaultValue={profile?.phone}
              />
            </div>
            <Button disabled={updating}>
              {updating ? 'Updating...' : 'Update Profile'}
            </Button>
          </div>
        </form>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Shipping Addresses</h2>
          <div className="space-y-4">
            {addresses.map((address) => (
              <div key={address.id} className="border p-4 rounded">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium">
                      {address.firstName} {address.lastName}
                      {address.isDefault && (
                        <span className="ml-2 text-sm text-blue-600">(Default)</span>
                      )}
                    </p>
                    <p className="text-gray-600">{address.streetAddress1}</p>
                    {address.streetAddress2 && (
                      <p className="text-gray-600">{address.streetAddress2}</p>
                    )}
                    <p className="text-gray-600">
                      {address.city}, {address.state} {address.postalCode}
                    </p>
                    <p className="text-gray-600">{address.country}</p>
                  </div>
                  <div className="space-x-2">
                    <Button 
                      variant="outline" 
                      onClick={() => setEditingAddress(address.id)}
                    >
                      Edit
                    </Button>
                    <Button 
                      variant="outline"
                      className="text-red-600 hover:text-red-700"
                      onClick={() => handleDeleteAddress(address.id)}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              </div>
            ))}
            <Button 
              variant="outline"
              onClick={() => setShowAddAddress(true)}
            >
              Add New Address
            </Button>
          </div>
        </div>
        </div>

        <div className="space-y-6">
        {/* Add/Edit Address Modal */}
        {(showAddAddress || editingAddress) && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg p-6 max-w-lg w-full">
              <h3 className="text-xl font-semibold mb-4">
                {editingAddress ? 'Edit Address' : 'Add New Address'}
              </h3>
              <form onSubmit={handleAddAddress} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">First Name</label>
                    <input
                      name="firstName"
                      type="text"
                      className="w-full p-2 border rounded"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Last Name</label>
                    <input
                      name="lastName"
                      type="text"
                      className="w-full p-2 border rounded"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Street Address</label>
                  <input
                    name="street1"
                    type="text"
                    className="w-full p-2 border rounded mb-2"
                    required
                  />
                  <input
                    name="street2"
                    type="text"
                    className="w-full p-2 border rounded"
                    placeholder="Apartment, suite, etc. (optional)"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">City</label>
                    <input
                      name="city"
                      type="text"
                      className="w-full p-2 border rounded"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">State</label>
                    <input
                      name="state"
                      type="text"
                      className="w-full p-2 border rounded"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Postal Code</label>
                    <input
                      name="postalCode"
                      type="text"
                      className="w-full p-2 border rounded"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Country</label>
                    <input
                      name="country"
                      type="text"
                      className="w-full p-2 border rounded"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Phone</label>
                  <input
                    name="phone"
                    type="tel"
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="isDefault"
                    id="isDefault"
                    className="mr-2"
                  />
                  <label htmlFor="isDefault" className="text-sm">
                    Set as default address
                  </label>
                </div>
                <div className="flex justify-end space-x-2 mt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => {
                      setShowAddAddress(false);
                      setEditingAddress(null);
                    }}
                  >
                    Cancel
                  </Button>
                  <Button type="submit">
                    {editingAddress ? 'Update Address' : 'Add Address'}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
          <div className="space-y-4">
            <Button 
              variant="outline" 
              className="w-full justify-start"
              onClick={() => toast.info("Password change functionality coming soon")}
            >
              Change Password
            </Button>
            <Button 
              variant="outline" 
              className="w-full justify-start"
              onClick={() => toast.info("Notification settings coming soon")}
            >
              Notification Settings
            </Button>
            <Button 
              variant="outline" 
              className="w-full justify-start"
              onClick={() => toast.info("Payment methods coming soon")}
            >
              Payment Methods
            </Button>
            <Button 
              variant="outline" 
              className="w-full justify-start text-red-600 hover:text-red-700"
              onClick={() => {
                if (window.confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
                  toast.info("Account deletion functionality coming soon");
                }
              }}
            >
              Delete Account
            </Button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
