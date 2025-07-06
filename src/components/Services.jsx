import Image from 'next/image';
export default function Services() {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold mb-10 text-gray-900">Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">

        {/* Service 1 */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md text-gray-900">
          <Image src="/anxiety.png" alt="Anxiety Management" width={200} height={200} className="mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Anxiety & Stress Management</h3>
          <p className="text-gray-800">
            Learn personalized strategies to cope with stress and reduce anxiety through supportive, evidence-based techniques like mindfulness and CBT.
          </p>
        </div>

        {/* Service 2 */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md text-gray-900">
          <Image src="/relationship.png" alt="Relationship Counseling" width={200} height={200} className="mx-auto mb-4" />
          
          <h3 className="text-xl font-bold mb-2">Relationship Counseling</h3>
          <p className="text-gray-800">
            Enhance communication and strengthen your personal or romantic relationships with compassionate, structured guidance.
          </p>
        </div>

        {/* Service 3 */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md text-gray-900">
          <Image src="/Trauma.png" alt="Trauma Recovery" width={200} height={200} className="mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Trauma Recovery</h3>
          <p className="text-gray-800">
            Heal from past trauma in a safe, supportive environment using approaches like EMDR and trauma-focused CBT.
          </p>
        </div>

      </div>
    </section>
  );
}
