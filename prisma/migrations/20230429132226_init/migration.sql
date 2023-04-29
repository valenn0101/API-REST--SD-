-- CreateTable
CREATE TABLE `brands` (
    `id` INTEGER NOT NULL,
    `name` VARCHAR(255) NULL,
    `logo_url` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `products` (
    `id` INTEGER NOT NULL,
    `name` VARCHAR(255) NULL,
    `description` TEXT NULL,
    `image_url` VARCHAR(255) NULL,
    `price` DECIMAL(10, 2) NULL,
    `discounted` BOOLEAN NULL,
    `discountPercentage` DECIMAL(5, 2) NULL,
    `stock` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
