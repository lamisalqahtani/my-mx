"use client";

import { useEffect, useState } from "react";
import { getAllPrograms } from "@/api/programs";

export default function ProgramsPage() {
const [programs, setPrograms] = useState<any[]>([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");

useEffect(() => {
async function loadPrograms() {
try {
const res = await getAllPrograms("en");

console.log("API RESPONSE:", res);

if (Array.isArray(res?.nano_degrees)) {
setPrograms(res.nano_degrees);
} else {
setPrograms([]);
}
} catch (err) {
console.error(err);
setError("Failed to load programs");
} finally {
setLoading(false);
}
}

loadPrograms();
}, []);

if (loading) return <p>Loading programs...</p>;
if (error) return <p>{error}</p>;
if (!programs.length) return <p>No programs found.</p>;

return (
<div style={{ padding: 20 }}>
<h1>Programs</h1>

{programs.map((program, index) => (
<div
key={program.id || index}
style={{
border: "1px solid #ccc",
padding: 12,
marginBottom: 10,
borderRadius: 8,
}}
>
<h3>{program.title}</h3>
<p>{program.summary}</p>
</div>
))}
</div>
);
}