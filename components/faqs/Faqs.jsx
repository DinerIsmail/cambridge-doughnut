import React from 'react';
import PropTypes from 'prop-types';

import styles from './Faqs.module.scss';

const FaqLinks = ({ faqs }) => (
	<>
		<ul className={styles.links}>
			<li>
				<a href="#what">What is the ‘Cambridge Doughnut’?</a>
			</li>
			<li>
				<a href="#how">
					How will the doughnut create change in Greater Cambridge?
				</a>
			</li>
			<li>
				<a href="#who">Who will create the doughnut?</a>
			</li>
			<li>
				<a href="#will-this-help">
					Is this just research, or will this really help Cambridge?
				</a>
			</li>
			<li>
				<a href="#how-is-this-different">
					There are a lot of initiatives in this area, how is this
					different?
				</a>
			</li>
			<li>
				<a href="#how-can-my-organisation-help">
					How can my organisation, community group, school or business
					get involved?
				</a>
			</li>
			<li>
				<a href="#how-can-i-help">
					How can I, as an individual, get involved?
				</a>
			</li>
			<li>
				<a href="#funding">How is this initiative being funded?</a>
			</li>
			<li>
				<a href="#my-life-is-busy">
					My life is already very busy, how can I fit it in?
				</a>
			</li>
		</ul>

		<h2 id="what">What is the ‘Cambridge Doughnut’?</h2>
		<p>
			The Cambridge Doughnut is a tool for transformative action in
			Greater Cambridge, inspired by the{' '}
			<a href="https://cambridgedoughnut.org.uk/videos">
				work of British Economist, Kate Raworth
			</a>
			.
		</p>
		<p>
			The Cambridge Doughnut envisions a socially just world in which the
			essentials of life, like access to nutritious food and decent
			housing, are afforded to all. The Doughnut’s{' '}
			<a href="https://www.un.org/sustainabledevelopment/sustainable-development-goals/">
				social foundation
			</a>{' '}
			(the centre of the doughnut) sets out the minimum standard of living
			to which we all have a claim. The Doughnut’s ecological ceiling
			comprises nine{' '}
			<a href="https://www.stockholmresilience.org/research/planetary-boundaries.html">
				planetary boundaries
			</a>{' '}
			within which we must live to preserve a stable climate, fertile
			soils, healthy oceans, a protective ozone layer, ample freshwater
			and abundant biodiversity on Earth (see image below).
		</p>
		<p>
			<em>
				“Between the social foundation and the ecological ceiling lies a
				doughnut-shaped space in which it is possible to meet the needs
				of all people within the means of the living planet – an
				ecologically safe and socially just space in which humanity can
				thrive.”
			</em>{' '}
			- Kate Raworth
		</p>
		<p class=" block-img">
			<img
				src="https://images.prismic.io/cambridgedoughnut/e34b2fe0-4155-4492-8645-36841dc0fb4f_1doughnut.png?auto=compress,format"
				alt="Image of doughnut, showing the lower and upper limits."
			/>
		</p>
		<p>
			Once completed, the doughnut will provide a{' '}
			<strong>dashboard </strong>of indicators by which to measure the
			health of our local economy (see examples of national dashboards
			below). The Cambridge Doughnut will show where the city is operating
			within safe ecological and social limits, and where it is
			underperforming. The doughnut portrait will not itself provide
			solutions but is a mechanism to guide decision making for key
			players in the city to help them identify effective approaches and
			priorities.
		</p>
		<p class=" block-img">
			<img
				src="https://images.prismic.io/cambridgedoughnut/3e45f00e-40d3-4e39-a051-c2e48dec09d7_2doughnut.png?auto=compress,format"
				alt="Examples of doughtnut graphs for the UK, Costa Rica and Togo"
			/>
		</p>
		<p></p>
		<h2 id="how">
			How will the doughnut create change in Greater Cambridge?
		</h2>
		<p>
			The Cambridge City Council is leading the way by agreeing to use the
			doughnut to evaluate council policies and strategies. We invite
			businesses, universities, and other organisations to do the same.
		</p>
		<p>
			As&nbsp; an open data initiative, the doughnut will be made into an
			online, interactive dashboard, accessible by all. We hope this
			resource will empower individuals with the knowledge they need to
			transform Greater Cambridge as employees, business owners,
			volunteers, students, educators, voters, activists, consumers and
			other agents of change.
		</p>
		<h2 id="who">Who will create the doughnut?</h2>
		<p>All of us, together!&nbsp;</p>
		<p>
			The voluntary{' '}
			<a href="https://cambridgedoughnut.org.uk/about">
				Cambridge Doughnut Community Action Group
			</a>{' '}
			(CamDEAG) and our partners will host online Hackathons, open to all
			members of the public, to (1) collect performance indicators and
			data, and (2) program the ‘digital doughnut’.
		</p>
		<p>
			Separate story-telling and target-setting events will initially be
			open to residents of a single ward, as a trial, and will eventually
			open up to all who live, study or work in Cambridge.
		</p>
		<h2 id="will-this-help">
			Is this just research, or will this really help Cambridge?
		</h2>
		<p>
			The Doughnut is more than a dashboard of performance indicators. It
			will also contain:&nbsp;
		</p>
		<ul>
			<li>
				<strong>Stories</strong> that provide depth and texture to our
				understanding of local challenges and opportunities for
				flourishing;
			</li>
			<li>
				<strong>
					A list of local initiatives, policies, social enterprises,
					and movements{' '}
				</strong>
				that are creating or have created transformative change in one
				or more areas of the doughnut;&nbsp;
			</li>
			<li>
				<strong>Short-term targets </strong>to hold key institutions
				accountable.
			</li>
		</ul>
		<h2 id="how-is-this-different">
			There are a lot of initiatives in this area, how is this different?
		</h2>
		<p>
			Yes, there are a lot of people and organisations doing good things
			in Cambridge. Our aim is not to repeat but to help pull together. In
			partnership with all key organisations and the voice of residents,
			we want to build the Doughnut so we can set our priorities and
			measure our progress so far. Then we can look to solutions.
		</p>
		<h2 id="how-can-my-organisation-help">
			How can my organisation, community group, school or business get
			involved?
		</h2>
		<p>
			We are keen to partner with organisations with similar values that
			are also seeking to address the issues of economic inequality,
			social justice, climate change and environmental degradation. You
			can support the initiative in a number of ways, e.g. through data
			sharing, funding, feeding back on our project plans, and sharing our
			initiative with your members.{' '}
		</p>
		<p>
			If you would like to join us in helping to build the doughnut, or
			simply stay informed of its progress, please register your interest
			on the <a href="https://cambridgedoughnut.org.uk/join">Join Us</a>{' '}
			page.
		</p>
		<h2 id="how-can-i-help">How can I, as an individual, get involved?</h2>
		<ul>
			<li>
				<a href="https://bit.ly/3iKCRyn">
					Join the voluntary community action group
				</a>{' '}
				and help us plan and deliver this exciting initiative!
			</li>
			<li>
				Join one of our upcoming{' '}
				<a href="https://cambridgedoughnut.org.uk/hackathons">
					Hackathons
				</a>
				.
			</li>
			<li>Encourage your organisation to get involved.</li>
			<li>
				If you would like to contribute stories, targets, or initiatives
				to the doughnut, please register your interest on the{' '}
				<a href="https://cambridgedoughnut.org.uk/join">Join Us</a>{' '}
				page, so we can notify you when the ‘Digital Doughnut’ is open
				for public input.
			</li>
		</ul>
		<h2 id="funding">How is this initiative being funded?</h2>
		<ul>
			<li>
				Cambridge City Council has committed council officer support.
			</li>
			<li>
				The community action group is currently seeking grant funding.
				Please contact us with grant suggestions at{' '}
				<a href="mailto:info@cambridgedoughnut.org.uk">
					info@cambridgedoughnut.org.uk
				</a>
				.
			</li>
		</ul>
		<h2 id="my-life-is-busy">
			My life is already very busy, how can I fit it in?
		</h2>
		<p>
			We recognise that people live busy lives. You can choose how much or
			how little to become involved. You will be in control and can decide
			how you can contribute as things change. You will be kept informed
			and every action, however big or small, helps build the Doughnut.
		</p>
	</>
);

export default FaqLinks;
