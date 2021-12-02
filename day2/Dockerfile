FROM node:14.18.1-alpine
RUN mkdir /app
WORKDIR /app
COPY day2_part1.js .
COPY day2_part2.js .
COPY input.txt .

CMD ["sh", "-c", "echo 'Part 1' && node day2_part1.js | grep 'Answer:'; echo '\nPart 2' && node day2_part2.js | grep 'Answer:'"];