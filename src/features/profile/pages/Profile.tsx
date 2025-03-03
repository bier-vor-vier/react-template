import {useGetUserProfileQuery} from "../store/profileApi.ts";

const Profile = () => {
    const { data, error, isLoading } = useGetUserProfileQuery();

    if (isLoading) return <p>Lädt...</p>;
    if (error) return <p className="text-red-500">Fehler beim Laden</p>;

    return (
        <div className="p-6 max-w-md mx-auto bg-white rounded-sm shadow-lg space-y-4">
            <h2 className="text-xl font-bold">👤 Benutzerprofil</h2>
            <p><strong>Name:</strong> {data?.name}</p>
            <p><strong>Email:</strong> {data?.email}</p>
        </div>
    );
}

export default Profile;
