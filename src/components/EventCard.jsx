export default function EventCard({ title, description, price, date }) {
    return (
        <div className="px-4 py-2 border border-gray-200 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="text-gray-600">{description}</p>
            <p className="text-sm text-gray-500">Price: ${price}</p>
            <p className="text-sm text-gray-500">Date: {date}</p>
        </div>
    );
}