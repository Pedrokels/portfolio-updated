<script setup>
import { developer, site, socials } from '../data/profile'
import { scrollToSection } from '../composables/useSectionNav'
import SiteHeader from '../components/ui/SiteHeader.vue'
import SiteFooter from '../components/ui/SiteFooter.vue'
import HeroIntro from '../components/ui/HeroIntro.vue'
import PageSection from '../components/ui/PageSection.vue'
import LabeledRows from '../components/ui/LabeledRows.vue'
import ContactSection from '../components/ui/ContactSection.vue'
import AppButton from '../components/ui/AppButton.vue'
import ResumeCard from '../components/ui/ResumeCard.vue'
import TimelineRows from '../components/ui/TimelineRows.vue'
import { resumeLink } from '../composables/resume'
import Icon from '../components/ui/Icon.vue'
import ProjectItem from '../components/sections/ProjectItem.vue'

const links = [
  { label: 'About', id: 'about' },
  { label: 'Work', id: 'work' },
  { label: 'Experience', id: 'experience' },
  { label: 'Contact', id: 'contact' }
]

const resume = resumeLink(developer.resumeUrl, site.role)
</script>

<template>
  <div id="top" class="outline-none">
    <SiteHeader :brand="site.name" brand-to="/developer" :links="links" back />

    <main id="main">
      <HeroIntro
        :labels="['Freelance Full Stack Developer', 'Remote · US-based Client', '2026 — Present']"
        identity="developer"
        :name-lines="['Peter John', 'Gerero']"
        :lead="developer.headline"
        :sub="developer.intro"
        meta-label="Works with"
        :meta="developer.focus"
      >
        <template #actions>
          <AppButton href="#work" @click.prevent="scrollToSection('work')">View work</AppButton>
          <AppButton :href="resume.href" variant="secondary" :icon="resume.available ? 'arrow-right' : ''" :external="resume.available">
            Résumé
          </AppButton>
        </template>
      </HeroIntro>

      <!-- 01 About -->
      <PageSection id="about" number="01" label="About" title="Software people rely on, every working day.">
        <div class="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <figure v-reveal class="max-w-xs lg:col-span-3 lg:max-w-none">
            <img
              :src="developer.portrait"
              alt="Portrait of Peter John Gerero in black and white"
              width="600"
              height="750"
              loading="lazy"
              decoding="async"
              class="aspect-[4/5] w-full rounded-md border border-border object-cover object-[50%_60%]"
            >
          </figure>

          <div class="lg:col-span-9">
            <div class="max-w-prose space-y-6">
              <p v-reveal class="text-lead text-foreground">{{ developer.about[0] }}</p>
              <p v-for="(paragraph, i) in developer.about.slice(1)" :key="i" v-reveal="(i + 1) * 60" class="text-base leading-7 text-muted">
                {{ paragraph }}
              </p>
            </div>

            <dl class="mt-12 grid grid-cols-2 gap-x-8 border-t border-border sm:grid-cols-4">
              <div v-for="(fact, i) in developer.facts" :key="fact.label" v-reveal="i * 60" class="pt-6">
                <dt class="eyebrow">{{ fact.label }}</dt>
                <dd class="mt-2 text-sm text-foreground">{{ fact.value }}</dd>
              </div>
            </dl>
          </div>
        </div>
      </PageSection>

      <!-- 02 Technology -->
      <PageSection id="stack" number="02" label="Technology" title="The tools I reach for.">
        <div class="lg:grid lg:grid-cols-12 lg:gap-8">
          <div class="lg:col-span-9 lg:col-start-4">
            <LabeledRows :rows="developer.stack" />
          </div>
        </div>
      </PageSection>

      <!-- 03 Work -->
      <PageSection id="work" number="03" label="Selected work" title="Systems built for real operations.">
        <div class="space-y-24 md:space-y-32">
          <ProjectItem
            v-for="(project, i) in developer.projects"
            :key="project.slug"
            :project="project"
            :index="i"
            :reversed="i % 2 === 1"
          />
        </div>
        <p v-reveal class="mt-24 border-t border-border pt-6 text-sm text-muted">{{ developer.projectsNote }}</p>
      </PageSection>

      <!-- 04 Experience -->
      <PageSection id="experience" number="04" label="Experience" title="Where I’ve worked.">
        <div class="lg:grid lg:grid-cols-12 lg:gap-8">
          <div class="lg:col-span-9 lg:col-start-4">
            <TimelineRows :items="developer.experience" />

            <h3 v-reveal class="eyebrow mt-16">Education</h3>
            <TimelineRows
              class="mt-4"
              :items="[{ period: developer.education.period, role: developer.education.degree, org: developer.education.school }]"
            />

            <ResumeCard class="mt-16" :resume="resume" />
          </div>
        </div>
      </PageSection>

      <!-- 05 Contact -->
      <ContactSection
        number="05"
        body="Have a project, a role, or an idea you want to build? Let’s talk."
      >
        <p class="mt-16 border-t border-border pt-6 text-sm text-muted">
          I also edit video and create content as {{ site.alias }}.
          <router-link to="/creator" class="link ml-1">See that work <Icon name="arrow-right" :size="14" /></router-link>
        </p>
      </ContactSection>
    </main>

    <SiteFooter :links="socials.developer" />
  </div>
</template>
