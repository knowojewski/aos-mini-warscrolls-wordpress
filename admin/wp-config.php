<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'aos-miniwarscrolls' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'OhhGK;{&/Xc_%[-ex8=S?|]-79~]pkLmhVT`lBPDm$l*<s{>$T<44zz/6#}LoE8[' );
define( 'SECURE_AUTH_KEY',  ',s+ovLZoXn!f#j-(wv(]DEmW^4&;9N>JBi&plm<kPi.}nz*-7qQs01>wg< hTe=M' );
define( 'LOGGED_IN_KEY',    '>/SJl+F+jZ-)MqyD>0?U@:<&l*k=ItS3^iyUTb~5$G^_UGm#!EdwCiR#2BA7E[NZ' );
define( 'NONCE_KEY',        ' v1n{k=AhgzvN(-%a{(Dgw3F i.HiAvo/W#S8#`._B`Na-k*?Hvbs@r0Nl!#7aL_' );
define( 'AUTH_SALT',        '-IW&{_]<T#{xR~a$_85ss.iI]EGC;xjSUV]2jo$YUOY1Rt2}g-5R(3xlQm}G^hLH' );
define( 'SECURE_AUTH_SALT', 'RSm9;5>TSr 1c+4U_[QABl{{~j{NgcNA4,672L*SK@-l{f8HOkTguKN;-iyP q~^' );
define( 'LOGGED_IN_SALT',   '2M!IDbk&{vw#C P}ZV}7nuD}+9hHoSiIWUv5cA +GKBfvvR$G:8}B9o/`u*j1IHg' );
define( 'NONCE_SALT',       ',BgbCn8Vnth[@X74k.ug#08!b#<YC5kA|(Y]-8fYFs gER!,,i2Gm7;0um*L5/K0' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
