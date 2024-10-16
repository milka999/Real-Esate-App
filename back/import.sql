CREATE TABLE IF NOT EXISTS public.users
(
    id integer NOT NULL DEFAULT nextval('users_id_seq'::regclass),
    first_name character varying(255) COLLATE pg_catalog."default",
    last_name character varying(255) COLLATE pg_catalog."default",
    email character varying(255) COLLATE pg_catalog."default",
    pass character varying(255) COLLATE pg_catalog."default",
    phone_number character varying(12) COLLATE pg_catalog."default",
    role_id integer,
    CONSTRAINT users_pkey PRIMARY KEY (id),
    CONSTRAINT users_role_id_fkey FOREIGN KEY (role_id)
        REFERENCES public.user_role (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.users
    OWNER to postgres;

CREATE TABLE IF NOT EXISTS public.user_role
(
    id integer NOT NULL DEFAULT nextval('user_role_id_seq'::regclass),
    name character varying(20) COLLATE pg_catalog."default",
    CONSTRAINT user_role_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.user_role
    OWNER to postgres;

-- Table: public.structure

-- DROP TABLE IF EXISTS public.structure;

CREATE TABLE IF NOT EXISTS public.structure
(
    id integer NOT NULL DEFAULT nextval('structure_id_seq'::regclass),
    name character varying(255) COLLATE pg_catalog."default",
    CONSTRAINT structure_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.structure
    OWNER to postgres;

-- Table: public.type

-- DROP TABLE IF EXISTS public.type;

CREATE TABLE IF NOT EXISTS public.type
(
    id integer NOT NULL DEFAULT nextval('type_id_seq'::regclass),
    name character varying(255) COLLATE pg_catalog."default",
    CONSTRAINT type_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.type
    OWNER to postgres;

-- Table: public.location

-- DROP TABLE IF EXISTS public.location;

CREATE TABLE IF NOT EXISTS public.location
(
    id integer NOT NULL DEFAULT nextval('location_id_seq'::regclass),
    city_id integer,
    name character varying(255) COLLATE pg_catalog."default",
    CONSTRAINT location_pkey PRIMARY KEY (id),
    CONSTRAINT location_city_id_fkey FOREIGN KEY (city_id)
        REFERENCES public.city (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.location
    OWNER to postgres;

-- Table: public.listing_type

-- DROP TABLE IF EXISTS public.listing_type;

CREATE TABLE IF NOT EXISTS public.listing_type
(
    id integer NOT NULL DEFAULT nextval('listing_type_id_seq'::regclass),
    name character varying(255) COLLATE pg_catalog."default",
    CONSTRAINT listing_type_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.listing_type
    OWNER to postgres;

-- Table: public.listing

-- DROP TABLE IF EXISTS public.listing;

CREATE TABLE IF NOT EXISTS public.listing
(
    id integer NOT NULL DEFAULT nextval('listing_id_seq'::regclass),
    title character varying(255) COLLATE pg_catalog."default",
    description text COLLATE pg_catalog."default",
    price integer,
    unit_size integer,
    parking boolean,
    garden boolean,
    terrace boolean,
    date_uploaded date,
    date_updated date,
    location_id integer,
    author_id integer,
    type_id integer,
    listing_type_id integer,
    structure_id integer,
    img_url character varying(510) COLLATE pg_catalog."default",
    contact character varying(30) COLLATE pg_catalog."default",
    CONSTRAINT listing_pkey PRIMARY KEY (id),
    CONSTRAINT listing_author_id_fkey FOREIGN KEY (author_id)
        REFERENCES public.users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT listing_listing_type_id_fkey FOREIGN KEY (listing_type_id)
        REFERENCES public.listing_type (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT listing_location_id_fkey FOREIGN KEY (location_id)
        REFERENCES public.location (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT listing_structure_id_fkey FOREIGN KEY (structure_id)
        REFERENCES public.structure (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT listing_type_id_fkey FOREIGN KEY (type_id)
        REFERENCES public.type (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.listing
    OWNER to postgres;

-- Table: public.city

-- DROP TABLE IF EXISTS public.city;

CREATE TABLE IF NOT EXISTS public.city
(
    id integer NOT NULL DEFAULT nextval('city_id_seq'::regclass),
    name character varying(55) COLLATE pg_catalog."default",
    CONSTRAINT city_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.city
    OWNER to postgres;