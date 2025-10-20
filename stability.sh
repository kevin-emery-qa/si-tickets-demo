# test stability and reliability is critical for any front-end automation framework to be useful.
# this shell script can be used to execute individual test specs 100 times in a row to confirm that there is no intermittent failure
for i in {1..100}
do
npx playwright test -g "validate home page load"
done
