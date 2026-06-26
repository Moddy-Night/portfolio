# 🎯 Slimane Portfolio — خطة المشروع الكاملة

> أنشئت: 26 يونيو 2026  
> آخر تحديث: 26 يونيو 2026  
> الموقع: https://portfolio-slimane-dun.vercel.app  

---

## ✅ المنجز — 100%

### 1️⃣ فحص البيئة والتنظيف

| المهمة | التقنية | الحالة |
|--------|---------|--------|
| فحص البيئة (Node, Flutter, Docker, Python, FFmpeg) | `node -v`, `flutter doctor`, إلخ | ✅ |
| حذف المشاريع المكررة | `rm -rf` | ✅ |
| مسح ملفات ضخمة (flutter.zip 965MB + flutter_sdk/ 985MB) | bash | ✅ |
| تحرير ~2GB مساحة | — | ✅ |
| ضبط Git Identity | `git config user.name/email` | ✅ |
| GitHub Auth (Token جديد لـ Moddy-Night) | `gh auth login` | ✅ |
| Supabase CLI | `npm i -g supabase` | ✅ |

### 2️⃣ Portfolio Website — المكدس التقني

```
react@19.1.0     ← مكتبة UI
vite@8.1.0       ← بناء وتطوير
typescript@5.8   ← لغة
tailwindcss@4.3  ← CSS utilities
@react-three/fiber@9.1.0  ← Three.js لـ React
@react-three/drei@10.0.7  ← أدوات مساعدة لـ R3F
three@0.176.0    ← محرك 3D
framer-motion@12.9  ← أنيميشن
vercel@54.17.2   ← نشر
```

### 3️⃣ الأقسام والمكونات

| القسم | المكون | الملف |
|-------|--------|-------|
| 🏠 **Hero** | Typing effect + 3D مشهد (Icosahedron + TorusKnot + جسيمات) | `src/components/Hero.tsx`, `three/HeroScene.tsx` |
| 👤 **About** | صورتك + إحصائيات + Bio | `src/components/About.tsx` |
| 🛠️ **Skills** | **SVG أيقونات حقيقية** (React, TS, Tailwind, Flutter, Docker...) | `src/components/Skills.tsx`, `TechIcon.tsx` |
| 📁 **Projects** | 6 مشاريع حقيقية (Wasl, Odysseus, AI-CRM, ERP, French App, Arabic CLI) | `src/components/Projects.tsx` |
| 📬 **Contact** | فورم React مع AJAX → FormSubmit.co → بريدك | `src/components/Contact.tsx` |
| 🧭 **NavBar** | sticky + responsive (Hamburger menu) + active section tracking | `src/components/NavBar.tsx` |
| 🔤 **Data** | مشاريع، مهارات، روابط اجتماعية | `src/data/index.ts` |
| 🎨 **Styles** | Tailwind v4 + CSS variables (dark theme) + animations | `src/index.css` |

### 4️⃣ الإصلاحات والتحديثات

| المشكلة | الحل |
|---------|------|
| الإيموجيز بدل أيقونات المهارات (⚛️📘🎨) | ✅ أيقونات SVG حقيقية لكل تقنية (React, TS, Flutter, Docker...) عبر `TechIcon.tsx` |
| صورة "Photo coming soon" | ✅ وضع صورتك `slimane.jpg` في About → حذف placeholder |
| Contact لا يشتغل (CSP block) | ✅ أضفنا `form-action https://formsubmit.co` لـ CSP + فورم بـ AJAX fetch |
| FormSubmit.co ما يقبل POST عادي | ✅ نغير endpoint لـ `/ajax/` |
| أمان Vibe Coding | ✅ CSP headers + Lazy loading + مافي لا API keys ولا dangerouslySetInnerHTML |

### 5️⃣ النشر

| الخطوة | التفاصيل |
|--------|---------|
| المنصة | Vercel (via `vercel --prod`) |
| الرابط | https://portfolio-slimane-dun.vercel.app |
| Dashboard | https://vercel.com/moddy-nights-projects/portfolio-slimane |
| وقت البناء | ~15 ثانية مع cache |
| استضافة | Washington, D.C. (iad1) |

---

## ⏳ ما زال عالقًا / مقترحات للمستقبل

### 🚨 عاجل (مهم يشوفه المستخدم)
| المهمة | التفاصيل | الأولوية |
|--------|---------|----------|
| **تفعيل FormSubmit.co** | FormSubmit يرسل إيميل تأكيد إلى `slimaneabaziz76@gmail.com` — افتح بريدك واضغط على رابط التفعيل. بدونها ما راح توصلك رسايل الفورم | 🔴 ضروري |
| GitHub Repository | حاليًا Vercel نشر مباشر بدون Git. لو سوينا repo نقدر نربطه بـ Vercel عشان auto-deploy من GitHub | 🟡 مهم |

### 🟢 تحسينات مقترحة
| المهمة | التقنية | الأولوية |
|--------|---------|----------|
| Domain مخصص | شراء `slimaneabaziz.com` + ربطه بـ Vercel | 🟢 |
| **تحميل 3D أسرع** | HeroScene.js حجمه ~888KB (ثلاثة.js). نقدر نضغطه أكثر باستخدام `gzip` أو نستخدم CDN | 🟢 |
| **SEO** | إضافة sitemap.xml + robots.txt + Google Search Console | 🟢 |
| **Analytics** | ربط Google Analytics أو Plausible | 🟢 |
| **Blog section** | إضافة مدونة تقنية (MDX أو Notion API) | 🟡 لاحقاً |
| **Dark/Light toggle** | إضافة تبديل بين dark و light mode | 🟢 |
| **Testimonials** | قسم شهادات العملاء | 🟡 لاحقاً |
| **i18n** | ترجمة الموقع للعربية | 🟡 لاحقاً |
| **Speed test** | تشغيل Lighthouse وتحسين النتيجة | 🟢 |
| **Open Graph image** | تصميم OG image احترافية للمشاركة | 🟢 |

### 🛑 ملاحظات تقنية مهمة
- **Lazy loading:** HeroScene (3D) محمل بـ `React.lazy` → ما يأثر على الـ initial load
- **FormSubmit.io:** خدمة مجانية ترسل لك الإيميلات. إذا وصلت 50 رسالة/شهر تحتاج تدفع أو تحول لـ Supabase Edge Function
- **الـ CSP**: أضفنا `form-action` بعد ما كان مفقود — هذا سبب تعطل الفورم
- **Tailwind v4**: الإصدار الجديد ما يحتاج `tailwind.config.js` كل الضبط في CSS نفسه
- **Vercel cache**: الاستفادة من cache يخفض وقت البناء من 30s → 13s

---

## 🧰 الأوامر المفيدة

```bash
# تطوير
cd /c/Users/DASH/portfolio-website
npm run dev          # تشغيل سيرفر التطوير
npm run build        # بناء إنتاجي
npx vite preview     # معاينة النتاج

# نشر
vercel               # نشر preview
vercel --prod        # نشر إنتاجي

# Git (لما نحول لـ GitHub)
git init
git add .
git commit -m "Initial portfolio"
gh repo create portfolio --public --source=. --push
vercel link          # ربط Vercel بـ GitHub
```

---

## 💡 توصيات سليمان

1. **افتح بريدك** وراجع إيميل التأكيد من FormSubmit.co — هذا أهم شيء عشان الفورم يشتغل
2. بعدها **جرب ترسل رسالة** من الفورم في الموقع وتشوفها توصل
3. لو عجبك الموقع — نقدر **نشتري دومين** ونربطه
4. **سوي LinkedIn account** احترافي واربطه بالموقع
5. مشاريعك **(Wasl, Odyssey, AI-CRM, ERP, French App, CLI)** كلها حقيقية — أحسن نضيفها على GitHub عشان تظهر في الـ portfolio

---

> 📝 الملف: `.hermes/plan.md`  
> ⏱️ المشروع كلف: ~3 ساعات (فحص + تنظيف + بناء + إصلاحات + نشر)
