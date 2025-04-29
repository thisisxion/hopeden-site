export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-800">
      <h1 className="text-5xl font-extrabold mb-4">희망치과에 오신 걸 환영합니다</h1>
      <p className="text-xl mb-8">
        최소침습 임플란트 · 9단계 멸균 시스템 · 환자 맞춤 관리
      </p>
      <a
        href="/contact"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        진료 예약하기
      </a>
    </main>
  );
}