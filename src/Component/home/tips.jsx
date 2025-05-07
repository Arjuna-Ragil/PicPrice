import React from 'react'

const Tips = () => {
  const tipsList = [
    "Ambil gambar dengan pencahayaan yang baik.",
    "Pastikan seluruh produk terlihat jelas.",
    "Gunakan latar belakang yang bersih.",
    "Hindari efek atau filter berlebihan.",
    "Unggah gambar dari berbagai sudut pandang."
  ]

  return (
    <section className={`
        flex flex-col w-full h-full items-center justify-center px-6 py-8 gap-6 bg-secondary rounded-2xl shadow-xl border border-gray-200
    `}>

      <h3 className="text-2xl font-VictorMono font-semibold text-white text-center">
        Helpful Tips
      </h3>

      <ol className="list-decimal list-inside text-left space-y-2 max-w-md text-white font-poppins text-base leading-relaxed">
        {tipsList.map((tip, index) => (
          <li key={index}>{tip}</li>
        ))}
      </ol>
    </section>
  )
}

export default Tips