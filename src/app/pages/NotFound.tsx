import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold text-red-600">404 - Seite nicht gefunden</h1>
            <p className="mt-4 text-lg">Die angeforderte Seite existiert nicht.</p>
            <Link to="/" className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
                Zurück zur Startseite
            </Link>
        </div>
    );
};

export default NotFound;