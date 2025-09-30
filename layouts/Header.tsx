"use client";

import { logo1 } from "@/assets";
import { headerLinks, socials } from "@/utils/data";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const Header = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	const closeMobileMenu = () => {
		setIsMobileMenuOpen(false);
	};

	// Close mobile menu on escape key press
	useEffect(() => {
		const handleEscape = (e: any) => {
			if (e.key === "Escape") {
				setIsMobileMenuOpen(false);
			}
		};

		if (isMobileMenuOpen) {
			document.addEventListener("keydown", handleEscape);
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}

		return () => {
			document.removeEventListener("keydown", handleEscape);
			document.body.style.overflow = "unset";
		};
	}, [isMobileMenuOpen]);

	// Close menu on window resize to desktop size
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 768 && isMobileMenuOpen) {
				setIsMobileMenuOpen(false);
			}
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [isMobileMenuOpen]);

	return (
		<>
			<header className='sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<nav className='flex items-center justify-between h-16'>
						{/* Logo/Brand */}
						<Link
							href='/'
							className='flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 rounded-md'
							onClick={closeMobileMenu}
						>
							<Image
								width={200}
								height={120}
								src={logo1}
								alt='Logo'
							/>
						</Link>

						{/* Desktop Navigation */}
						<ul className='hidden md:flex items-center space-x-8'>
							{headerLinks.map((link) => (
								<li key={link.title}>
									<Link
										href={link.link}
										className='text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200 relative group px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'
									>
										{link.title}
										<span className='absolute -bottom-1 left-2 w-0 h-0.5 bg-gray-900 transition-all duration-200 group-hover:w-[calc(100%-16px)]'></span>
									</Link>
								</li>
							))}
						</ul>

						{/* Desktop Social Icons */}
						<div className='hidden md:flex items-center space-x-4'>
							{socials.map((social, index) => (
								<Link
									key={index}
									href={social.url}
									target='_blank'
									rel='noopener noreferrer'
									className='p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'
									aria-label={
										social.name || `Social link ${index + 1}`
									}
								>
									<Icon
										className='text-xl text-gray-700 cursor-pointer hover:text-gray-900 transition-colors duration-200'
										icon={social.icon}
									/>
								</Link>
							))}
						</div>

						{/* Mobile menu button */}
						<button
							onClick={toggleMobileMenu}
							className='md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 transition-colors duration-200'
							aria-expanded={isMobileMenuOpen}
							aria-label='Toggle navigation menu'
							aria-controls='mobile-menu'
						>
							<Icon
								icon={isMobileMenuOpen ? "mdi:close" : "mdi:menu"}
								className='h-6 w-6'
							/>
						</button>
					</nav>
				</div>
			</header>

			{/* Mobile Navigation Overlay */}
			{isMobileMenuOpen && (
				<div
					className='fixed inset-0 z-40 md:hidden'
					onClick={closeMobileMenu}
				>
					<div className='absolute inset-0 bg-black bg-opacity-25 backdrop-blur-sm' />
				</div>
			)}

			{/* Mobile Navigation Menu */}
			<div
				id='mobile-menu'
				className={`md:hidden fixed top-16 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
					isMobileMenuOpen
						? "transform translate-y-0 opacity-100 visible"
						: "transform -translate-y-2 opacity-0 invisible"
				}`}
			>
				<div className='bg-white border-b border-gray-200 shadow-lg mx-4 rounded-lg overflow-hidden'>
					{/* Navigation Links */}
					<div className='px-4 py-3 space-y-1'>
						{headerLinks.map((link) => (
							<Link
								key={link.title}
								href={link.link}
								onClick={closeMobileMenu}
								className='block px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500'
							>
								{link.title}
							</Link>
						))}
					</div>

					{/* Mobile Social Icons */}
					{socials.length > 0 && (
						<div className='border-t border-gray-200 px-4 py-4'>
							<div className='flex items-center justify-center space-x-6'>
								{socials.map((social, index) => (
									<a
										key={index}
										href={social.url}
										target='_blank'
										rel='noopener noreferrer'
										onClick={closeMobileMenu}
										className='p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'
										aria-label={
											social.name || `Social link ${index + 1}`
										}
									>
										<Icon
											className='text-xl text-gray-700 hover:text-gray-900 transition-colors duration-200'
											icon={social.icon}
										/>
									</a>
								))}
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default Header;
