'use client';

export default function ApiTest() {
	const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8001';
	
	return (
		<div className="p-8">
			<h1 className="text-2xl font-bold mb-4">API Configuration Test</h1>
			<div className="bg-gray-100 p-4 rounded">
				<p><strong>NEXT_PUBLIC_API_URL:</strong> {process.env.NEXT_PUBLIC_API_URL || 'undefined (using fallback)'}</p>
				<p><strong>Resolved API URL:</strong> {apiUrl}</p>
				<p><strong>Upload Endpoint:</strong> {apiUrl}/api/v1/resumes/upload</p>
			</div>
			<button 
				onClick={async () => {
					try {
						const response = await fetch(`${apiUrl}/ping`);
						const data = await response.json();
						alert(`Backend response: ${JSON.stringify(data)}`);
					} catch (error) {
						alert(`Error: ${error}`);
					}
				}}
				className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
			>
				Test Backend Connection
			</button>
		</div>
	);
}
