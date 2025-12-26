'use client'

export default function ModalTransition() {
    return (
        <div
            className="fixed inset-0 z-[9999] pointer-events-none"
            style={{
                animation: 'fadeToWhite 15s ease-in-out forwards'
            }}
        />
    )
}

