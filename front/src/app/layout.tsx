import type { Metadata } from "next";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

export const metadata: Metadata = {
  title: "LNCC - Laboratório de Bioinformática",
  description: "Laboratório de Bioinformática",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang="en">
      <body className={`antialiased`}>
        <NextIntlClientProvider messages={messages}>
         {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
