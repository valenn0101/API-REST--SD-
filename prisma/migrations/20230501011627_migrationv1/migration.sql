-- CreateTable
CREATE TABLE `brands` (
    `id` VARCHAR(36) NOT NULL,
    `name` VARCHAR(255) NULL,
    `logo_url` VARCHAR(255) NULL,
    `description` TEXT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `products` (
    `id` VARCHAR(36) NOT NULL,
    `name` VARCHAR(255) NULL,
    `description` TEXT NULL,
    `image_url` VARCHAR(255) NULL,
    `price` DECIMAL(10, 2) NULL,
    `discounted` BOOLEAN NULL,
    `discountPercentage` DECIMAL(5, 2) NULL,
    `stock` INTEGER NULL,
    `brandId` VARCHAR(191) NULL,

    INDEX `brandId`(`brandId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(45) NOT NULL,
    `password` VARCHAR(45) NOT NULL,

    UNIQUE INDEX `username_UNIQUE`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `products_brandId_fkey` FOREIGN KEY (`brandId`) REFERENCES `brands`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
