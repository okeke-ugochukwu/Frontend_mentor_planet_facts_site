npm run build
cd dist
git init
git add -A
git commit -m "deploy"
git push -f https://github.com/okeke-ugochukwu/Frontend_mentor_planet_facts_site main:live
cd ..