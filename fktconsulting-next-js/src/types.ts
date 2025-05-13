import {
  SanityImageAssetDocument,
  SanityAssetDocument,
  PortableTextBlock,
  SanityDocument,
} from "next-sanity";

export interface BaseSection {
  _key: string;
  _type: string;
}

export interface CallToActionSectionType extends BaseSection {
  image: SanityImageAssetDocument;
  title: string;
  description: string;
  ctaText: string;
  ctaUrl: string;
  brochure: SanityAssetDocument;
  brochureUrl: string;
}

export interface FAQSectionType extends BaseSection {
  title: string;
  description: string;
  faq: QuestionReponse[];
}

export interface QuestionReponse {
  _key: string;
  question: string;
  reponse: PortableTextBlock;
}

export interface LatestArticlesSectionType extends BaseSection {
  title: string;
  description: string;
  actualites: SanityDocument[];
}

export interface LogoListSectionType extends BaseSection {
  title: string;
  description: string;
  logos: Logo[];
}

export interface Logo {
  _key: string;
  image: object;
  url: string;
  title: string;
}

export interface MediaTextSectionType extends BaseSection {
  title: string;
  description: PortableTextBlock[];
  image: SanityImageAssetDocument;
  layoutColor: string;
  layout: string;
  mediaType: string;
  video: {
    title: string;
    url: string;
  };
  showCta: string;
  linkType: string;
  internalLink: {
    _type: string;
    slug: { current: string };
  };
  externalUrl: string;
  ctaText: string;
}

export interface RichTextSectionType extends BaseSection {
  richText: PortableTextBlock[];
}

export interface ServicesSectionType extends BaseSection {
  title: string;
  description: string;
  services: Service[];
}

export interface Service {
  _id: string;
  title: string;
  slug: { current: string };
  image: string;
  imageUrl: string;
}

export interface SliderSectionType extends BaseSection {
  slides: Slide[];
}

export interface Slide {
  _key: string;
  image: object;
  captionPosition: string;
  title: string;
  description: string;
  ctaText: string;
  ctaUrl: string;
}

export interface TemoignagesSectionType extends BaseSection {
  title: string;
  description: string;
  temoignages: Temoignage[];
}

export interface Temoignage {
  _key: string;
  image: object;
  nom: string;
  message: string;
  position: string;
}

export interface VideoSectionType extends BaseSection {
  title: string;
  description: string;
  url: string;
}

export type Section =
  | RichTextSectionType
  | VideoSectionType
  | MediaTextSectionType
  | SliderSectionType
  | FAQSectionType
  | LogoListSectionType
  | CallToActionSectionType
  | LatestArticlesSectionType
  | ServicesSectionType
  | TemoignagesSectionType;
