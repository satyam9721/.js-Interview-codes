Background processing is executing tasks outside the main request-response cycle to improve performance and user experience.

For example, sending emails, generating reports, or processing images should not block the API response.	
  
  •	Queue = async task processing
	•	Worker = job executor
	•	Event = system notification
	•	DLQ = failed jobs storage
	•	Idempotent = safe retries
