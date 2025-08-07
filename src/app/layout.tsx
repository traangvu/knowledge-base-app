//src/app/layout.tsx

// app/layout.tsx
import './globals.css';
import ApolloWrapper from '@/components/ApolloWrapper';
import Providers from '@/components/Providers';

export const metadata = {
  title: 'My App',
  description: 'Knowledge base app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers> {/* ✅ SessionProvider now wrapped here */}
          <ApolloWrapper>
            {children}
          </ApolloWrapper>
        </Providers>
      </body>
    </html>
  );
}
