<?php
function render_logo_grid_block($attributes) {
	$logos = $attributes['logos'];
	$columns = $attributes['columns'];

	// Generate the block's HTML...
	$output = '<div class="logo-grid-container" style="--columns: ' . esc_attr($columns) . ';">';
	foreach ($logos as $logo) {
		$output .= '<div class="logo-container">';
		$output .= '<img class="logo" src="' . esc_url($logo['url']) . '" alt="' . esc_attr($logo['alt']) . '" />';
		$output .= '</div>';
	}
	$output .= '</div>';

	return $output;
}

function register_logo_grid_block() {
	register_block_type('create-block/logo-grid', array(
			'attributes' => array(
					'logos' => array(
							'type' => 'array',
							'default' => array(),
					),
					'columns' => array(
							'type' => 'number',
							'default' => 3,
					),
			),
			'render_callback' => 'render_logo_grid_block',
	));
}
add_action('init', 'register_logo_grid_block');
