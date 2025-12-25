CREATE TABLE "ecommerce"."users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"email" varchar(255) NOT NULL,
	"password" varchar(255) NOT NULL,
	"role" varchar(255) DEFAULT 'user' NOT NULL,
	"name" varchar(255) NOT NULL,
	"address" text,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
