import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import LightModeToggle from "../Darkmode/LightModeToogle";
import { useTheme } from "../Darkmode/ThemeContext";

export default function Nav() {
  const { isLightMode, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["Category", "Product", "Blog", "About"];
  useEffect(() => {
    document.body.className = isLightMode ? "" : "bg-white";
  }, [isLightMode]);

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isBordered
      className="fixed z-[99999] backdrop-blur-md bg-background/70"
      maxWidth="full"
    >
      <NavbarContent className="container-responsive flex justify-between">
        <NavbarBrand className="flex-shrink-0">
          <p className="font-bold text-inherit text-lg lg:text-xl">INDRA MAULANA</p>
        </NavbarBrand>

        {/* Desktop Menu */}
        <NavbarContent className="hidden md:flex gap-6 lg:gap-8" justify="center">
          <NavbarItem>
            <Link 
              color="foreground" 
              href="#" 
              className="font-medium hover:text-primary transition-colors"
            >
              Category
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link 
              color="foreground" 
              href="#" 
              className="font-medium hover:text-primary transition-colors"
            >
              Product
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link 
              color="foreground" 
              href="#" 
              className="font-medium hover:text-primary transition-colors"
            >
              Blog
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link 
              color="foreground" 
              href="#" 
              className="font-medium hover:text-primary transition-colors"
            >
              About
            </Link>
          </NavbarItem>
          <NavbarItem>
            <LightModeToggle />
          </NavbarItem>
        </NavbarContent>

        {/* Mobile Menu Toggle */}
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden"
        />
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu className="pt-6 backdrop-blur-md bg-background/95">
        <div className="flex justify-center mb-6">
          <LightModeToggle />
        </div>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`} className="mb-2">
            <Link 
              color="foreground" 
              className="w-full text-center font-medium text-lg py-2 hover:text-primary transition-colors" 
              href="#"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
