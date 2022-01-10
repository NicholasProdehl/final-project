set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

CREATE TABLE "users" (
	"userId" serial NOT NULL,
	"firstName" TEXT NOT NULL,
	"lastName" TEXT NOT NULL,
	"username" TEXT NOT NULL,
	"hashedPassword" TEXT NOT NULL,
	CONSTRAINT "users_pk" PRIMARY KEY ("userId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "entries" (
	"entryId" serial NOT NULL,
	"title" TEXT NOT NULL,
	"photoUrl" TEXT NOT NULL,
	"body" TEXT NOT NULL,
	"userId" integer NOT NULL,
	CONSTRAINT "entries_pk" PRIMARY KEY ("entryId")
) WITH (
  OIDS=FALSE
);




ALTER TABLE "entries" ADD CONSTRAINT "entries_fk0" FOREIGN KEY ("userId") REFERENCES "users"("userId");
