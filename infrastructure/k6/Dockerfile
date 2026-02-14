FROM grafana/xk6:1.3

WORKDIR /app
RUN ["xk6", "build", "--with", "github.com/grafana/xk6-sql@latest", "--with", "github.com/grafana/xk6-sql-driver-postgres", "--output", "/usr/bin/k6"]

ENTRYPOINT ["k6"]

# FROM alpine:3.23.3 as k6

# COPY --from=xk6 /app/k6 /usr/bin/k6

# WORKDIR /home/k6
# ENTRYPOINT ["k6"]