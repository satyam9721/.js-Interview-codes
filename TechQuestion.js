Background processing is executing tasks outside the main request-response cycle to improve performance and user experience.

For example, sending emails, generating reports, or processing images should not block the API response.	
  
  •	Queue = async task processing
	•	Worker = job executor
	•	Event = system notification
	•	DLQ = failed jobs storage
	•	Idempotent = safe retries

Difference: Monitoring vs Logging

Answer:
	•	Monitoring → system health (metrics)
	•	Logging → detailed records (events/errors)

What is a Build?

Answer:

Build is the process of converting source code into a runnable application.

👉 Example:
	•	Installing dependencies
	•	Compiling code
	•	Creating artifacts

What is a Health Check?

Answer:

A health check endpoint (like /health) ensures the server is running and responsive.
