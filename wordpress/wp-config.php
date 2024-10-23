<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'eduJo' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
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
define( 'AUTH_KEY',         'AbU1Y`3G-o5c-qnu<nL@fTw}&_M3 D7^?+Kx_2]4QSUp@j }967auGH0JeFUzvi5' );
define( 'SECURE_AUTH_KEY',  'b;p13Gf<{/~<;[Hn)kG1u@%t227$c%<4rxab&]1znLDaH;32wjC1D<g(8^5)+1p-' );
define( 'LOGGED_IN_KEY',    'eF-n/B?g6$.0|95k4#nV|<~7 ?c10GW(,zLjHx2>:i?g}I?&2Zk1C<inj<PtY*2I' );
define( 'NONCE_KEY',        '#^iyKiG//.xzm} cZ#-[U06gBb^jaIkKbxDQ$w3=v6V7skaN(D0Io$1a6([_V6TN' );
define( 'AUTH_SALT',        'j?+4/A]N||g87O~Jfa%fnhSSOh0.BH/AnpxL@%]`xWf@rN{@sImj*q2Xohm9wQJP' );
define( 'SECURE_AUTH_SALT', '9}.RIlCQx|.uvFp1%:jtfgrvO_0Z:3].:&3Oy-KrQ9KRfw#NzKG>L.>yS-`TU&yO' );
define( 'LOGGED_IN_SALT',   '%<T,qY?,Xr5brp_I64qd<:`j@|dP/n;? *D^oK@LMb@5Ext>>#k1}CDh2u%Ee5ze' );
define( 'NONCE_SALT',       'cbB&Xa7]8+LYju=#INj`E1I<pN9/Z!&{seG#%91zc? [b>0K2+X2^-!#vpDXyzav' );

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
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
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
