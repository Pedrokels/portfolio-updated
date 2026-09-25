<script setup>
import { creator, site, socials } from '../data/profile'
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
import ReelEmbed from '../components/sections/ReelEmbed.vue'

const links = [
  { label: 'Reels', id: 'reels' },
  { label: 'Videos', id: 'videos' },
  { label: 'About', id: 'about' },
  { label: 'Contact', id: 'contact' }
]

// The video editor résumé — never the developer one.
const resume = resumeLink(creator.resumeUrl, creator.role)

const videoSrc = (video) =>
  `https://www.youtube-nocookie.com/embed/${video.id}${video.start ? `?start=${video.start}` : ''}`
</script>

<template>
  <div id="top" class="outline-none">
    <SiteHeader :brand="site.alias" brand-to="/creator" :links="links" back />

    <main id="main">
      <HeroIntro
        :labels="['Content Creator — Video Editor']"
        identity="creator"
        :name-lines="['Pedro', 'Juan']"
        :lead="creator.headline"
        :sub="creator.intro"
        meta-label="Track record"
        :meta="creator.facts.map((fact) => `${fact.value} ${fact.label.toLowerCase()}`)"
      >
        <template #actions>
          <AppButton href="#reels" @click.prevent="scrollToSection('reels')">Watch reels</AppButton>
          <AppButton :href="resume.href" variant="secondary" :icon="resume.available ? 'arrow-right' : ''" :external="resume.available">
            Résumé
          </AppButton>
        </template>
      </HeroIntro>

      <!-- 01 Reels -->
      <PageSection id="reels" number="01" label="Reels" title="Top reels, formatted for mobile.">
        <template #aside>
          <a :href="creator.reelsUrl" target="_blank" rel="noopener noreferrer" class="link text-sm">
            All reels on Facebook <Icon name="arrow-up-right" :size="14" />
            <span class="sr-only">(opens in a new tab)</span>
          </a>
        </template>

        <div class="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          <div v-for="(reel, i) in creator.reels" :key="reel.url" v-reveal="(i % 3) * 80">
            <ReelEmbed :reel="reel" :index="i" />
          </div>
        </div>
      </PageSection>

      <!-- 02 Videos -->
      <PageSection id="videos" number="02" label="Long form" title="The full stories behind the reels.">
        <template #aside>
          <a :href="creator.youtubeUrl" target="_blank" rel="noopener noreferrer" class="link text-sm">
            YouTube channel <Icon name="arrow-up-right" :size="14" />
            <span class="sr-only">(opens in a new tab)</span>
          </a>
        </template>

        <div class="grid gap-8 md:grid-cols-2">
          <div
            v-for="(video, i) in creator.videos"
            :key="video.id"
            v-reveal="i * 80"
            class="aspect-video overflow-hidden rounded-md border border-border bg-surface-2"
          >
            <iframe
              :src="videoSrc(video)"
              :title="video.title"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
              class="size-full border-0"
            />
          </div>
        </div>
      </PageSection>

      <!-- 03 About -->
      <PageSection id="about" number="03" label="About" title="Editing keeps me grounded.">
        <div class="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <figure v-reveal class="group max-w-xs lg:col-span-3 lg:max-w-none">
            <img
              :src="creator.portrait"
              alt="Portrait of Pedro Juan"
              width="600"
              height="750"
              loading="lazy"
              decoding="async"
              class="shot aspect-[4/5] w-full rounded-md border border-border object-cover"
            >
          </figure>

          <div class="lg:col-span-9">
            <div class="max-w-prose space-y-6">
              <p v-reveal class="text-lead text-foreground">{{ creator.about[0] }}</p>
              <p v-for="(paragraph, i) in creator.about.slice(1)" :key="i" v-reveal="(i + 1) * 60" class="text-base leading-7 text-muted">
                {{ paragraph }}
              </p>
            </div>

            <div class="mt-12">
              <LabeledRows :rows="creator.tools" />
            </div>

            <h3 v-reveal class="eyebrow mt-16">Experience</h3>
            <TimelineRows class="mt-4" :items="creator.experience" />

            <figure v-reveal class="mt-12 max-w-prose">
              <blockquote class="text-heading font-medium text-foreground">
                “{{ creator.testimonial.quote }}”
              </blockquote>
              <figcaption class="mt-4 text-sm text-muted">
                {{ creator.testimonial.author }} — {{ creator.testimonial.source }}
              </figcaption>
            </figure>

            <ResumeCard class="mt-16" :resume="resume" />
          </div>
        </div>
      </PageSection>

      <!-- 04 Contact -->
      <ContactSection
        number="04"
        title="Let’s make something."
        body="Travel, nature, or short-form storytelling — if you have footage and a story, I’d love to help cut it."
      >
        <p class="mt-16 border-t border-border pt-6 text-sm text-muted">
          By day I’m a full stack developer.
          <router-link to="/developer" class="link ml-1">See my engineering work <Icon name="arrow-right" :size="14" /></router-link>
        </p>
      </ContactSection>
    </main>

    <SiteFooter :title="site.alias" :subtitle="creator.role" :links="socials.creator" />
  </div>
</template>
