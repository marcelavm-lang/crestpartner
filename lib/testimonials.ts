// Client voices — verbatim source text per the Crest Partners Handbook v2.7 (Section 9 update, 2026-10-09).
// Rules: keep quotes verbatim; mark cuts with […]; Josh Levy's two email typos are corrected (public line).
export type Testimonial = {
  id: string
  topic: string
  quote: string
  name: string
  title: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'josh-levy',
    topic: 'Building from scratch',
    quote:
      "I had the pleasure of working closely with Marcela for many years, starting from the very beginning when our Costa Rica presence consisted of just her and Roberto. Watching her scale that office into the large, thriving organization it is today has been one of my favorite professional and personal experiences. […] She didn't just 'hire' a team; she built a world-class engineering hub from scratch. […] We would never have accomplished our goals without her.",
    name: 'Joshua Levy',
    title: 'CEO and Co-Founder · 10+ year partnership',
  },
  {
    id: 'gary-walter',
    topic: 'Leadership',
    quote:
      "Marcela Villalta is a leader within the software development and data industry and a top talent with General Management skills leading Infutor's Costa Rica facility. Marcela's strengths are her business acumen skills and her ability to motivate people towards organizational objectives. Across Infutor, there is not a more respected leader than Marcela Villalta.",
    name: 'Gary Walter',
    title: 'Business Owner · LinkedIn recommendation',
  },
  {
    id: 'justin-turner',
    topic: 'Talent sourcing',
    quote:
      '[…] She was fundamental in my efforts to build a well rounded development operations team. She was able to source high quality candidates across multiple disciplines and skill levels. She has intimate knowledge of the talent environment, including having relations within local Universities […]',
    name: 'Justin Turner',
    title: 'CEO, Silicon Dev',
  },
  {
    id: 'james-ryan',
    topic: 'Scaling operations',
    quote:
      'Marcela oversaw the growth and development of our department in Costa Rica from four people to over forty. She is an amazing manager and terrific person.',
    name: 'James Ryan',
    title: 'Owner, ryandirect, Inc.',
  },
]
