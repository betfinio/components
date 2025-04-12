import { Loader } from 'lucide-react';
import { Toaster as Sonner, toast } from 'sonner';

type ToasterProps = React.ComponentProps<typeof Sonner>;

const SonnerToaster = ({ ...props }: ToasterProps) => {
	return (
		<Sonner
			theme={'dark'}
			className="toaster group"
			icons={{
				loading: <Loader className="w-4 h-4 animate-spin " />,
			}}
			toastOptions={{
				unstyled: true,

				classNames: {
					toast:
						'data-[sonner-toast]:w-[var(--width)] group toast  text-foreground bg-background-lighter border shadow-lg flex items-center rounded-lg px-4 py-2 gap-2',
					description: 'group-[.toast]:text-muted-foreground',

					cancelButton: 'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground',
					success: 'border-success [&_svg]:text-success',
					error: 'border-destructive [&_svg]:text-destructive',
					loader: ' [&_svg]:text-foreground !static !transform-none data-[visible="false"]:hidden',
					actionButton: 'ml-auto',
				},
			}}
			{...props}
		/>
	);
};

export { SonnerToaster, toast };
