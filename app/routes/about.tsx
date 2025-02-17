import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FiGithub } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export default function AboutPage() {
  return (
    <div className="container px-4 py-10 mx-auto">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Hero Section */}
        <div className="flex flex-col items-start gap-6 md:flex-row">
          <Avatar className="w-24 h-24">
            <AvatarImage src="https://avatars.githubusercontent.com/u/35776126" />
            <AvatarFallback>RK</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-2">
            <div className="flex items-center justify-between">
              <h1 className="text-4xl font-bold">Ralph Khreish</h1>
              <ThemeToggle />
            </div>
            <p className="text-xl text-muted-foreground">
              Full-stack Web & Mobile Developer | Tech Lead
            </p>
            <div className="flex gap-2">
              <Button variant="outline" asChild>
                <a
                  href="https://github.com/Crunchyman-ralph"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiGithub className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        <Card className="border border-input">
          <CardHeader>
            <CardTitle>Professional Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Tech entrepreneur and experienced tech lead with a proven track
              record of building successful SaaS products and scaling
              applications from zero to thousands of daily active users.
              Specializing in full-stack development with expertise in
              TypeScript and its ecosystem.
            </p>
            <div className="space-y-2">
              <h3 className="font-semibold">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                <Badge>TypeScript</Badge>
                <Badge>React</Badge>
                <Badge>Next.js</Badge>
                <Badge>NestJS</Badge>
                <Badge>Express</Badge>
                <Badge>Remix</Badge>
                <Badge>React Router</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Experience */}
        <Card className="border border-input">
          <CardHeader>
            <CardTitle>Experience Highlights</CardTitle>
            <CardDescription>
              Working across startups and enterprise companies
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Enterprise Experience</h3>
                <ul className="ml-4 space-y-1 list-disc list-inside">
                  <li>Club Med</li>
                  <li>Colgate</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold">Leadership</h3>
                <p>
                  Led technical teams in developing and scaling products from
                  conception to thousands of daily active users.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Current Project */}
        <Card className="border border-input">
          <CardHeader>
            <CardTitle>Entrepreneurial Ventures</CardTitle>
            <CardDescription>Building SaaS Products</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold">Axe Checkbox Upsell</h3>
              <p className="mb-2">
                Founded and developed a successful Shopify app with over 500
                active users. The app helps e-commerce businesses boost their
                average order value through strategic upsell checkboxes at
                checkout.
              </p>
              <Button variant="outline" asChild className="mb-4">
                <a
                  href="https://apps.shopify.com/axe-check-my-box"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Shopify App Store
                </a>
              </Button>
            </div>
            <div>
              <h3 className="font-semibold">iOS Fitness App</h3>
              <p>
                Currently developing a sophisticated body fat calculator and
                tracking application for iOS. The app helps users monitor and
                track their body composition over time, providing valuable
                insights for their fitness journey.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
