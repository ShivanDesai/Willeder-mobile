# What is post_type?
post_type: 0 -> job_experience
           1 -> user_achievement(other experience)
           2 -> question(community)
           3 -> company_achievement(milestone)
           4 -> company_highlight(culture)
           5 -> job_post
inside () is name on web.

# All Feeds
1. All Feeds Tab: ignore for now
2. Experiences Tab: all_feeds/experiences.js
    - include job_experience, user_achievement, company_achievement, and company_highlight
3. Community Tab: all_feeds/questions.js

# Explore
1. Companies Tab: explore/explore_companies.js
2. Jobs Tab: explore/job_posts.js

# User/Company Page
1. User Page: user.js
2. Company Page: company.js

# Static
- city_id -> to get city_name, use static/location.js
- company_size_id -> to get company_size_name, use static/company_size.js
- business_industry_id -> to get business_industry_name, use static/business_industry.js
- tag_id -> to get tag_name, use static/tag.js
- topic_id -> to get topic_name, use static/topic.js
- is_anonymous -> 0: false(non-anonymous), 1: true(anonymous)
- employment_type_id -> to get employment_type_name, use static/employment_type.js
