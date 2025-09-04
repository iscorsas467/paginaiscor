-- CreateTable
CREATE TABLE "public"."home_hero" (
    "id" TEXT NOT NULL,
    "badge" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "subtitle" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "home_hero_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."home_stats" (
    "id" TEXT NOT NULL,
    "experience" TEXT NOT NULL,
    "companies" TEXT NOT NULL,
    "certifications" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "heroId" TEXT NOT NULL,

    CONSTRAINT "home_stats_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."home_cta_buttons" (
    "id" TEXT NOT NULL,
    "primaryText" TEXT NOT NULL,
    "primaryLink" TEXT NOT NULL,
    "secondaryText" TEXT NOT NULL,
    "secondaryLink" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "heroId" TEXT NOT NULL,

    CONSTRAINT "home_cta_buttons_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."home_services" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "home_services_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."home_service_items" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "gradient" TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "servicesId" TEXT NOT NULL,

    CONSTRAINT "home_service_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."home_features" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "home_features_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."home_feature_items" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "featuresId" TEXT NOT NULL,

    CONSTRAINT "home_feature_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."home_testimonials" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "home_testimonials_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."home_testimonial_items" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "rating" INTEGER NOT NULL DEFAULT 5,
    "order" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "testimonialsId" TEXT NOT NULL,

    CONSTRAINT "home_testimonial_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."company_hero" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "subtitle" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "company_hero_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."company_about" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "experience" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "company_about_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."company_services" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "aboutId" TEXT NOT NULL,

    CONSTRAINT "company_services_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."company_certifications" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "aboutId" TEXT NOT NULL,

    CONSTRAINT "company_certifications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."company_mission" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "company_mission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."company_vision" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "company_vision_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."company_strengths" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "company_strengths_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."company_strength_items" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "gradient" TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "strengthsId" TEXT NOT NULL,

    CONSTRAINT "company_strength_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."company_values" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "company_values_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."company_value_items" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "gradient" TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "valuesId" TEXT NOT NULL,

    CONSTRAINT "company_value_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."team_hero" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "subtitle" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "team_hero_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."team_stats" (
    "id" TEXT NOT NULL,
    "members" TEXT NOT NULL,
    "departments" TEXT NOT NULL,
    "experience" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "heroId" TEXT NOT NULL,

    CONSTRAINT "team_stats_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."team_leadership" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "team_leadership_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."team_departments" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "team_departments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."team_department_items" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "members" INTEGER NOT NULL,
    "icon" TEXT NOT NULL,
    "gradient" TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "departmentsId" TEXT NOT NULL,

    CONSTRAINT "team_department_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."team_full_team" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "team_full_team_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."team_members" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "linkedin" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "gradient" TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "leadershipId" TEXT,
    "fullTeamId" TEXT,

    CONSTRAINT "team_members_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."contact_hero" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "subtitle" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "contact_hero_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."contact_stats" (
    "id" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "heroId" TEXT NOT NULL,

    CONSTRAINT "contact_stats_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."contact_form" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "contact_form_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."contact_form_fields" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "placeholder" TEXT NOT NULL,
    "required" BOOLEAN NOT NULL DEFAULT false,
    "order" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "formId" TEXT NOT NULL,

    CONSTRAINT "contact_form_fields_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."contact_info" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "contact_info_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."contact_info_items" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "gradient" TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "infoId" TEXT NOT NULL,

    CONSTRAINT "contact_info_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."contact_faq" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "contact_faq_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."contact_faq_items" (
    "id" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "faqId" TEXT NOT NULL,

    CONSTRAINT "contact_faq_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."global_company" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slogan" TEXT NOT NULL,
    "logo" TEXT NOT NULL,
    "favicon" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "global_company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."global_contact" (
    "id" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "whatsapp" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "global_contact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."global_social" (
    "id" TEXT NOT NULL,
    "facebook" TEXT NOT NULL,
    "instagram" TEXT NOT NULL,
    "linkedin" TEXT NOT NULL,
    "twitter" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "contactId" TEXT NOT NULL,

    CONSTRAINT "global_social_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."global_seo" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "keywords" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "global_seo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "home_stats_heroId_key" ON "public"."home_stats"("heroId");

-- CreateIndex
CREATE UNIQUE INDEX "home_cta_buttons_heroId_key" ON "public"."home_cta_buttons"("heroId");

-- CreateIndex
CREATE UNIQUE INDEX "team_stats_heroId_key" ON "public"."team_stats"("heroId");

-- CreateIndex
CREATE UNIQUE INDEX "contact_stats_heroId_key" ON "public"."contact_stats"("heroId");

-- CreateIndex
CREATE UNIQUE INDEX "global_social_contactId_key" ON "public"."global_social"("contactId");

-- AddForeignKey
ALTER TABLE "public"."home_stats" ADD CONSTRAINT "home_stats_heroId_fkey" FOREIGN KEY ("heroId") REFERENCES "public"."home_hero"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."home_cta_buttons" ADD CONSTRAINT "home_cta_buttons_heroId_fkey" FOREIGN KEY ("heroId") REFERENCES "public"."home_hero"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."home_service_items" ADD CONSTRAINT "home_service_items_servicesId_fkey" FOREIGN KEY ("servicesId") REFERENCES "public"."home_services"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."home_feature_items" ADD CONSTRAINT "home_feature_items_featuresId_fkey" FOREIGN KEY ("featuresId") REFERENCES "public"."home_features"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."home_testimonial_items" ADD CONSTRAINT "home_testimonial_items_testimonialsId_fkey" FOREIGN KEY ("testimonialsId") REFERENCES "public"."home_testimonials"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."company_services" ADD CONSTRAINT "company_services_aboutId_fkey" FOREIGN KEY ("aboutId") REFERENCES "public"."company_about"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."company_certifications" ADD CONSTRAINT "company_certifications_aboutId_fkey" FOREIGN KEY ("aboutId") REFERENCES "public"."company_about"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."company_strength_items" ADD CONSTRAINT "company_strength_items_strengthsId_fkey" FOREIGN KEY ("strengthsId") REFERENCES "public"."company_strengths"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."company_value_items" ADD CONSTRAINT "company_value_items_valuesId_fkey" FOREIGN KEY ("valuesId") REFERENCES "public"."company_values"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."team_stats" ADD CONSTRAINT "team_stats_heroId_fkey" FOREIGN KEY ("heroId") REFERENCES "public"."team_hero"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."team_department_items" ADD CONSTRAINT "team_department_items_departmentsId_fkey" FOREIGN KEY ("departmentsId") REFERENCES "public"."team_departments"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."team_members" ADD CONSTRAINT "team_members_leadershipId_fkey" FOREIGN KEY ("leadershipId") REFERENCES "public"."team_leadership"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."team_members" ADD CONSTRAINT "team_members_fullTeamId_fkey" FOREIGN KEY ("fullTeamId") REFERENCES "public"."team_full_team"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."contact_stats" ADD CONSTRAINT "contact_stats_heroId_fkey" FOREIGN KEY ("heroId") REFERENCES "public"."contact_hero"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."contact_form_fields" ADD CONSTRAINT "contact_form_fields_formId_fkey" FOREIGN KEY ("formId") REFERENCES "public"."contact_form"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."contact_info_items" ADD CONSTRAINT "contact_info_items_infoId_fkey" FOREIGN KEY ("infoId") REFERENCES "public"."contact_info"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."contact_faq_items" ADD CONSTRAINT "contact_faq_items_faqId_fkey" FOREIGN KEY ("faqId") REFERENCES "public"."contact_faq"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."global_social" ADD CONSTRAINT "global_social_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "public"."global_contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;
