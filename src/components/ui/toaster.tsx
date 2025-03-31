import { CircleAlert, CircleCheck, Loader } from 'lucide-react';

import { useToast } from '../../hooks/use-toast.ts';
import { Toast, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from './toast';

export function Toaster({ className = '' }: { className?: string }) {
	const { toasts } = useToast();
	return (
		<ToastProvider>
			{toasts.map(({ id, title, description, variant, action, component, ...props }) => (
				<Toast key={id} {...props} variant={variant}>
					{!component ? (
						<>
							<div className="flex flex-row gap-4 items-center">
								{variant === 'default' && <CircleCheck className={'text-success w-8 h-8'} />}
								{variant === 'destructive' && <CircleAlert className={'text-destructive w-8 h-8'} />}
								{variant === 'soon' && <CircleAlert className={'text-purple-box w-8 h-8'} />}
								{variant === 'loading' && <Loader className={'text-primary w-8 h-8 animate-spin'} />}

								<div>
									{title && <ToastTitle>{title}</ToastTitle>}
									{description && <ToastDescription>{description}</ToastDescription>}
								</div>
							</div>
							<div className={'!mr-6'}>{action}</div>
						</>
					) : (
						<>{component}</>
					)}
					<ToastClose />
				</Toast>
			))}
			<ToastViewport className={className} />
		</ToastProvider>
	);
}
