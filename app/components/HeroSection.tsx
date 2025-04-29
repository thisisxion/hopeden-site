"use client";

import React from "react";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* 배경 이미지 */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: "url(/public/images/hope.jpg)" }}
      />

      {/* 검은 반투명 오버레이 */}
      <div className="absolute inset-0 bg-black/50" />

      {/* 텍스트 컨테이너 */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          희망치과에 오신 걸 환영합니다
        </h1>
        <p className="text-lg md:text-xl text-white/80 mb-6">
         · 멸균 시스템 · 환자 맞춤 관리
        </p>
        <a
          href="/contact"
          className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-secondary transition"
        >
          진료 예약하기
        </a>
      </div>
    </section>
  );
}