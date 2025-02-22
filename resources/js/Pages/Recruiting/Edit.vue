<style lang="scss" scoped>
input[type=checkbox] {
  top: 5px;
}

input[type=radio] {
  top: -2px;
}

.plus-button {
  padding: 2px 7px 4px;
  margin-right: 4px;
  border-color: #60995c;
  color: #60995c;
}

.sponsor {
  padding-left: 34px;

  .avatar {
    top: -2px;
    left: 2px;
  }
}
</style>

<template>
  <layout :notifications="notifications">
    <div class="ph2 ph0-ns">
      <breadcrumb :with-box="true"
                  :root-url="'/' + $page.props.auth.company.id + '/recruiting/job-openings'"
                  :root="$t('app.breadcrumb_hr_job_openings_active')"
                  :previous-url="'/' + $page.props.auth.company.id + '/recruiting/job-openings/' + jobOpening.id"
                  :previous="$t('app.breadcrumb_job_opening_detail')"
                  :has-more="false"
      >
        {{ $t('app.breadcrumb_hr_job_openings_edit') }}
      </breadcrumb>

      <!-- BODY -->
      <div class="mw7 center br3 mb5 bg-white box relative z-1">
        <h2 class="pa3 mt2 center tc normal mb2">
          {{ $t('dashboard.job_opening_edit_title') }}

          <help :url="$page.props.help_links.softwares" :top="'1px'" />
        </h2>

        <div class="cf">
          <form @submit.prevent="submit">
            <div v-if="form.errors.length > 0" class="pa3">
              <errors :errors="form.errors" />
            </div>

            <!-- position -->
            <div class="cf pa3 bb bb-gray">
              <div class="fl-ns w-third-ns w-100 mb3 mb0-ns">
                <strong>{{ $t('dashboard.job_opening_new_position') }}</strong>
              </div>
              <div class="fl-ns w-two-thirds-ns w-100">
                <select-box :id="'position'"
                            v-model="form.position"
                            :options="positions"
                            :name="'position'"
                            :errors="$page.props.errors.position"
                            :placeholder="$t('dashboard.job_opening_new_position_dropdown_placeholder')"
                            :required="true"
                            :extra-class-upper-div="'mb0'"
                            :label="$t('dashboard.job_opening_new_position_title')"
                />
              </div>
            </div>

            <!-- recruiting stage templates -->
            <div class="cf pa3 bb bb-gray">
              <div class="fl-ns w-third-ns w-100 mb3 mb0-ns">
                <strong>{{ $t('dashboard.job_opening_new_recruiting_stage_templates') }}</strong>
                <p class="f7 silver lh-copy">
                  {{ $t('dashboard.job_opening_new_recruiting_stage_templates_help') }}
                </p>
              </div>
              <div class="fl-ns w-two-thirds-ns w-100">
                <select-box :id="'template'"
                            v-model="form.recruitingStageTemplateId"
                            :options="templates"
                            :name="'recruitingStageTemplateId'"
                            :errors="$page.props.errors.recruitingStageTemplateId"
                            :placeholder="$t('dashboard.job_opening_template_dropdown_placeholder')"
                            :required="true"
                            :extra-class-upper-div="'mb0'"
                            :label="$t('dashboard.job_opening_template_title')"
                />
              </div>
            </div>

            <!-- sponsors -->
            <div class="cf pa3 bb bb-gray">
              <div class="fl-ns w-third-ns w-100 mb3 mb0-ns">
                <strong>{{ $t('dashboard.job_opening_new_sponsors') }}</strong>
                <p class="f7 silver lh-copy">
                  {{ $t('dashboard.job_opening_new_sponsors_help') }}
                </p>
              </div>
              <div class="fl-ns w-two-thirds-ns w-100">
                <!-- cta to add a sponsor -->
                <p v-if="!showSponsors && sponsors.length == 0" class="pointer" @click.prevent="showSponsors = true"><span class="ba br-100 plus-button">+</span> {{ $t('dashboard.job_opening_new_sponsors_cta') }}</p>

                <!-- cta to add another sponsor -->
                <p v-if="!showSponsors && sponsors.length > 0" class="pointer ma0" @click.prevent="showSponsors = true"><span class="ba br-100 plus-button">+</span> {{ $t('dashboard.job_opening_new_sponsors_other_cta') }}</p>

                <!-- search sponsor form -->
                <div v-if="showSponsors == true">
                  <form class="relative" @submit.prevent="search">
                    <text-input :id="'name'"
                                v-model="form.searchTerm"
                                :name="'name'"
                                :errors="$page.props.errors.name"
                                :label="$t('dashboard.job_opening_new_sponsor_dropdown')"
                                :placeholder="$t('group.create_members_help')"
                                :required="true"
                                @keyup="search"
                                @input="search"
                                @esc-key-pressed="showSponsors = false"
                    />
                    <ball-pulse-loader v-if="processingSearch" color="#5c7575" size="7px" />
                  </form>

                  <!-- search results -->
                  <ul v-show="potentialSponsors.length > 0" class="list pl0 ba bb-gray bb-gray-hover">
                    <li v-for="employee in potentialSponsors" :key="employee.id" class="relative pa2 bb bb-gray">
                      {{ employee.name }}
                      <a href="" class="fr f6" @click.prevent="add(employee)">{{ $t('app.add') }}</a>
                    </li>
                  </ul>

                  <!-- no results found -->
                  <ul v-show="potentialSponsors.length == 0 && form.searchTerm" class="list pl0 ba bb-gray bb-gray-hover">
                    <li class="relative pa2 bb bb-gray">
                      {{ $t('team.members_no_results') }}
                    </li>
                  </ul>
                </div>

                <!-- list of existing sponsors -->
                <div v-if="sponsors.length > 0" class="ba bb-gray mb3 mt3">
                  <div v-for="employee in sponsors" :key="employee.id" class="pa2 db bb-gray bb">
                    <span class="pl3 db relative sponsor">
                      <avatar :avatar="employee.avatar" :size="23" :class="'avatar absolute br-100'" />

                      {{ employee.name }}

                      <!-- remove -->
                      <a href="#" class="db f7 mt1 c-delete dib fr" @click.prevent="detach(employee)">
                        {{ $t('app.remove') }}
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <!-- team -->
            <div class="cf pa3 bb bb-gray">
              <div class="fl-ns w-third-ns w-100 mb3 mb0-ns">
                <strong>{{ $t('dashboard.job_opening_new_team') }}</strong>
              </div>
              <div class="fl-ns w-two-thirds-ns w-100">
                <select-box :id="'team'"
                            v-model="form.teamId"
                            :options="teams"
                            :name="'team'"
                            :errors="$page.props.errors.team"
                            :placeholder="$t('dashboard.job_opening_new_team_placeholder')"
                            :required="false"
                            :extra-class-upper-div="'mb0'"
                            :label="$t('dashboard.job_opening_new_team_dropdown')"
                />
              </div>
            </div>

            <!-- title & description -->
            <div class="cf pa3 bb bb-gray">
              <div class="fl-ns w-third-ns w-100 mb3 mb0-ns">
                <strong>{{ $t('dashboard.job_opening_new_job_details') }}</strong>
              </div>
              <div class="fl-ns w-two-thirds-ns w-100">
                <!-- Name -->
                <text-input :id="'title'"
                            v-model="form.title"
                            :name="'title'"
                            :errors="$page.props.errors.title"
                            :label="$t('dashboard.job_opening_new_details_title')"
                            :help="$t('dashboard.job_opening_new_title_help')"
                            :required="true"
                            :autofocus="true"
                />

                <!-- Reference number -->
                <text-input :id="'reference_number'"
                            v-model="form.reference_number"
                            :name="'reference_number'"
                            :errors="$page.props.errors.reference_number"
                            :label="$t('dashboard.job_opening_new_reference_number')"
                            :help="$t('dashboard.job_opening_new_reference_number_help')"
                            :required="false"
                />

                <!-- Description -->
                <text-area v-model="form.description"
                           :label="$t('dashboard.job_opening_new_description')"
                           :required="true"
                           :rows="10"
                />
              </div>
            </div>

            <!-- Actions -->
            <div class="pa3">
              <div class="flex-ns justify-between">
                <div>
                  <inertia-link :href="jobOpening.url_cancel" class="btn dib tc w-auto-ns w-100">
                    {{ $t('app.cancel') }}
                  </inertia-link>
                </div>
                <p v-if="form.sponsorsId.length == 0" class="ma0 f5"><span class="mr1">⚠️</span> {{ $t('dashboard.job_opening_new_select_sponsor') }}</p>
                <loading-button :class="'btn add w-auto-ns w-100'" :state="loadingState" :text="$t('app.save')" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </layout>
</template>

<script>
import TextInput from '@/Shared/TextInput';
import Errors from '@/Shared/Errors';
import LoadingButton from '@/Shared/LoadingButton';
import Layout from '@/Shared/Layout';
import Breadcrumb from '@/Shared/Layout/Breadcrumb';
import TextArea from '@/Shared/TextArea';
import Help from '@/Shared/Help';
import SelectBox from '@/Shared/Select';
import Avatar from '@/Shared/Avatar';
import 'vue-loaders/dist/vue-loaders.css';
import BallPulseLoader from 'vue-loaders/dist/loaders/ball-pulse';

export default {
  components: {
    Layout,
    Breadcrumb,
    TextInput,
    Errors,
    LoadingButton,
    TextArea,
    Avatar,
    Help,
    SelectBox,
    'ball-pulse-loader': BallPulseLoader.component,
  },

  props: {
    notifications: {
      type: Array,
      default: null,
    },
    positions: {
      type: Object,
      default: null,
    },
    teams: {
      type: Object,
      default: null,
    },
    templates: {
      type: Object,
      default: null,
    },
    jobOpening: {
      type: Object,
      default: null,
    },
  },

  data() {
    return {
      form: {
        title: null,
        reference_number: null,
        description: null,
        searchTerm: null,
        position: null,
        sponsorsId: [],
        recruitingStageTemplateId: null,
        teamId: null,
        errors: [],
      },
      loadingState: '',
      sponsors: [],
      processingSearch: false,
      potentialSponsors: [],
      showSponsors: false,
      errorTemplate: Error,
    };
  },

  mounted() {
    this.form.position = this.jobOpening.position.id;
    this.form.recruitingStageTemplateId = this.jobOpening.recruiting_stage_template_id;
    this.form.teamId = this.jobOpening.team ? this.jobOpening.team.id : null;
    this.form.title = this.jobOpening.title;
    this.form.description = this.jobOpening.description;
    this.form.description = this.jobOpening.description_raw;
    this.form.reference_number = this.jobOpening.reference_number;
    this.sponsors = this.jobOpening.sponsors;
    this.sponsors.forEach(entry => {
      this.form.sponsorsId.push(entry.id);
    });
  },

  methods: {
    submit() {
      if (this.form.sponsorsId.length === 0) {
        return;
      }

      this.loadingState = 'loading';

      axios.put(`${this.$page.props.auth.company.id}/recruiting/job-openings/${this.jobOpening.id}`, this.form)
        .then(response => {
          localStorage.success = this.$t('dashboard.job_opening_edit_success');
          this.$inertia.visit(response.data.data.url);
        })
        .catch(error => {
          this.loadingState = null;
          this.form.errors = error.response.data;
        });
    },

    search: _.debounce(
      function() {

        if (this.form.searchTerm != '') {
          this.processingSearch = true;

          axios.post(`/${this.$page.props.auth.company.id}/recruiting/job-openings/sponsors`, this.form)
            .then(response => {
              this.potentialSponsors = _.filter(response.data.data, employee => _.every(this.sponsors, e => employee.id !== e.id));
              this.processingSearch = false;
            })
            .catch(error => {
              console.log(error);
              this.form.errors = error.response.data;
              this.processingSearch = false;
            });
        } else {
          this.potentialSponsors = [];
        }
      }, 500),

    add(sponsor) {
      var id = this.sponsors.findIndex(x => x.id === sponsor.id);

      if (id == -1) {
        this.sponsors.push(sponsor);
        this.form.sponsorsId.push(sponsor.id);
        this.potentialSponsors = [];
        this.showSponsors = false;
        this.form.searchTerm = null;
      }
    },

    detach(sponsor) {
      var id = this.sponsors.findIndex(member => member.id === sponsor.id);
      this.sponsors.splice(id, 1);

      var id = this.form.sponsorsId.findIndex(sponsor.id);
      this.form.sponsorsId.splice(id, 1);
    }
  }
};

</script>
