"use client";

import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

interface CustomPageUserButtonProps {}

export default function CustomPageUserButton({}: CustomPageUserButtonProps) {
  return (
    <UserButton afterSignOutUrl="/">
      <UserButton.UserProfileLink
        label="Custom link"
        labelIcon={<div></div>}
        url="https://any-url.com"
      />
      <UserButton.UserProfilePage
        label="Custom Page"
        url="custom"
        labelIcon={<div></div>}
      >
        Custom page
      </UserButton.UserProfilePage>
    </UserButton>
  );
}
