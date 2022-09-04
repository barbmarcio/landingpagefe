export type ImageProps = {
  alternativeText: string
  url: string
}

export type ButtonProps = {
  label: string
  url: string
}

export type LandingPageProps = {
  logo: ImageProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
  sectionModules: SectionModulesProps
  sectionAgenda: SectionAgendaProps
  pricingBox: PricingBoxProps
  sectionAboutUs: SectionAboutUsProps
  sectionReviews: SectionReviewsProps
  sectionFaq: SectionFaqProps
}

export type HeaderProps = {
  title: string
  description: string
  button: ButtonProps
  image: ImageProps
}

export type SectionAboutProjectProps = {
  title: string
  description: string
  image: ImageProps
}

export type SectionTechProps = {
  title: string
  techIcons: {
    title: string
    icon: ImageProps
  }[]
}

export type SectionConceptsProps = {
  title: string
  concepts: {
    title: string
  }[]
}

export type SectionModulesProps = {
  title: string
  modules: {
    title: string
    subtitle: string
    description: string
  }[]
}

export type SectionAgendaProps = {
  title: string
  description: string
}

export type PricingBoxProps = {
  totalPrice: number
  discountPrice: number
  benefits: string
  button: ButtonProps
}

export type AuthorProps = {
  photo: ImageProps
  name: string
  role: string
  socialLinks: SocialLinkProps[]
  description: string
}

export type SocialLinkProps = {
  slug: string
  link: string
}

export type SectionAboutUsProps = {
  title: string
  authors: AuthorProps[]
}

export type ReviewProps = {
  id: number
  name: string
  text: string
  photo: ImageProps
}

export type SectionReviewsProps = {
  title: string
  reviews: ReviewProps[]
}

export type QuestionProps = {
  question: string
  answer: string
}

export type SectionFaqProps = {
  title: string
  questions: QuestionProps[]
}
