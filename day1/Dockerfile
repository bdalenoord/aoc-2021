FROM node:14.18.1-alpine
RUN mkdir /app
WORKDIR /app
COPY day1_part1.js .
COPY day1_part2.js .
COPY input.txt .

CMD ["sh", "-c", "echo 'Part 1' && node day1_part1.js | grep 'Total number of increases'; echo '\nPart 2' && node day1_part2.js | grep 'Total number of increases'"];