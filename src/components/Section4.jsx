import React, { useState } from "react";

export default function SectionContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState("");

const envoyer = async (e) => {
  e.preventDefault();

  if (formData.name && formData.email && formData.message) {
    try {
      const res = await fetch(
        "https://backend-production-36ef.up.railway.app/send-email",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();
      if (data.success) {
        alert("Message envoyé avec succès ✅");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Erreur lors de l'envoi ❌");
      }
    } catch (err) {
      console.error(err);
      alert("Erreur serveur ❌");
    }
  } else {
    setError("Veuillez remplir tous les champs.");
    setTimeout(() => setError(""), 3000);
  }
};

  return (
    <div id="contact" className="py-20 px-6 md:px-20 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
        📩 Contactez-moi
      </h2>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2 h-[400px] rounded-2xl overflow-hidden shadow-xl border">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3322.1255070931894!2d-7.618343!3d33.589886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d25d5f3b!2sAv.%202%20Mars%2C%20Casablanca!5e0!3m2!1sfr!2sma!4v1700000000000!5m2!1sfr!2sma"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="w-full md:w-1/2 bg-gray-50 p-8 rounded-2xl shadow-xl border">
          <form className="flex flex-col gap-5" onSubmit={envoyer}>
            <input
              type="text"
              name="name"
              placeholder="Votre nom"
              className="p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <input
              type="email"
              name="email"
              placeholder="Votre email"
              className="p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <textarea
              name="message"
              placeholder="Votre message"
              className="p-4 border rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-red-400"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            ></textarea>
            <button
              type="submit"
              className="bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition duration-300 shadow-md"
            >
              🚀 Envoyer
            </button>
            {error && (
              <p className="text-red-500 text-sm font-bold text-center">
                {error}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
