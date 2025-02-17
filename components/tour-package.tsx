"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

interface TourPackageProps {
  title: string
  description: string
  price: number
  duration: string
}

export function TourPackage({ title, description, price, duration }: TourPackageProps) {
  const { language } = useLanguage()

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat(language === "en" ? "en-BD" : "bn-BD", {
      style: "currency",
      currency: "BDT",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  const content = {
    en: {
      duration: "Duration",
      bookNow: "Book Now",
    },
    bn: {
      duration: "সময়কাল",
      bookNow: "বুক করুন",
    },
  }

  const t = content[language]

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
        <div className="mt-4">
          <p className="font-bold">{formatPrice(price)}</p>
          <p>
            {t.duration}: {duration}
          </p>
        </div>
        <Button className="mt-4">{t.bookNow}</Button>
      </CardContent>
    </Card>
  )
}

