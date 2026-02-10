# SOUL Student App - Pre-built Docker Image
# Uses pre-built app from student-app folder
#
# Build: docker build -t soul-student-app .
# Run:   docker run -d -p 3000:80 soul-student-app

FROM nginx:alpine

LABEL org.opencontainers.image.title="SOUL Student App" \
      org.opencontainers.image.description="SOUL System Student Learning Portal for Chromebooks"

# Copy pre-built app
COPY student-app /usr/share/nginx/html

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget -q --spider http://localhost:80/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
