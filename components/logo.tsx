import { cn } from "@/lib/utils";

export const Logo = ({ className }: { className?: string }) => {
	return (
		<img
			src="/logo.png"
			alt="Logo"
			className={cn("size-10", className)}
		/>
	);
};