import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: '0 0% 90%',
				input: '0 0% 90%',
				ring: '0 0% 20%',
				background: '0 0% 100%',
				foreground: '0 0% 10%',
				primary: {
					DEFAULT: '0 0% 20%',
					foreground: '0 0% 98%'
				},
				secondary: {
					DEFAULT: '30 20% 95%',
					foreground: '0 0% 20%'
				},
				destructive: {
					DEFAULT: '0 70% 50%',
					foreground: '0 0% 98%'
				},
				muted: {
					DEFAULT: '30 15% 96%',
					foreground: '0 0% 40%'
				},
				accent: {
					DEFAULT: '30 25% 92%',
					foreground: '0 0% 20%'
				},
				popover: {
					DEFAULT: '0 0% 100%',
					foreground: '0 0% 10%'
				},
				card: {
					DEFAULT: '0 0% 100%',
					foreground: '0 0% 10%'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: '0.5rem',
				md: '0.375rem',
				sm: '0.25rem'
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;