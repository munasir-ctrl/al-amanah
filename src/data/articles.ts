export interface Article {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  readTime: string;
  date: string;
}

export const articles: Article[] = [
  {
    slug: 'why-does-my-tooth-hurt',
    title: 'Why Does My Tooth Hurt? Common Causes and When to See a Dentist in Sharjah',
    category: 'Dental Health',
    excerpt: 'Tooth pain can range from a mild ache to sharp, debilitating discomfort. Understanding the common causes can help you know when to seek professional dental intervention.',
    content: 'Tooth pain is rarely something that resolves on its own permanently. Whether caused by enamel wear, a deep cavity, gum sensitivity, or an emerging issue, identifying the root cause early prevents more extensive treatments like root canals. At Al Amanah Medical Center, our experienced dental team provides comprehensive diagnostic checkups to relieve your discomfort promptly.',
    readTime: '3 min read',
    date: 'Sharjah Medical Update',
  },
  {
    slug: 'when-do-you-need-a-root-canal',
    title: 'When Do You Need a Root Canal? Signs and Symptoms to Watch For',
    category: 'Dental Health',
    excerpt: 'Root canal treatment saves teeth that would otherwise need extraction. Learn the signs that indicate you may need this restorative procedure.',
    content: 'A root canal becomes necessary when the soft tissue inside your tooth (the pulp) becomes inflamed or infected due to deep decay, repeated dental procedures, or a crack. Symptoms often include severe pain upon chewing, lingering sensitivity to hot or cold, and swelling around the gums. Modern root canal therapies are virtually painless and successfully preserve your natural smile.',
    readTime: '4 min read',
    date: 'Sharjah Medical Update',
  },
  {
    slug: 'signs-you-should-see-an-ent-specialist',
    title: 'Signs You Should See an ENT Specialist for Chronic Ear, Nose, and Throat Issues',
    category: 'ENT',
    excerpt: 'Ear, nose, and throat issues are common but sometimes need specialist care. Here are the signs that indicate it is time to see an ENT professional.',
    content: 'Persistent sinus pressure, recurring sore throats, hearing difficulties, and chronic nasal congestion can heavily impact your daily quality of life. An ear, nose, and throat (ENT) evaluation uncovers underlying allergies, infections, or structural concerns, ensuring targeted medical or therapeutic relief.',
    readTime: '3 min read',
    date: 'Sharjah Medical Update',
  },
];