'use client'

export function BackgroundGlow() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <div className="absolute top-[-8%] left-[-8%] w-[640px] h-[640px] bg-lime/10 rounded-full blur-[128px]" aria-hidden="true" />
      <div className="absolute bottom-[-12%] right-[-8%] w-[720px] h-[720px] bg-cyan/10 rounded-full blur-[128px]" aria-hidden="true" />
    </div>
  )
}