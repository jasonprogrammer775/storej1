interface PayPalButtonProps {
  onClick?: () => void;
}

export function PayPalButton({ onClick }: PayPalButtonProps) {
  return (
    <button
      type="button"
      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded shadow transition-colors w-full"
      onClick={onClick}
      aria-label="Buy with PayPal"
      disabled
    >
      Buy with PayPal (coming soon)
    </button>
  );
}